
import { useEffect } from 'react';

function setAttrs(el, attrs) {
  if (!el || !attrs) return () => {};
  const previous = {};
  for (const [key, raw] of Object.entries(attrs)) {
    let value = raw;
    if (Array.isArray(value)) value = value.join(' ');
    if (value === '' || value === null || value === undefined) value = '';
    previous[key] = el.getAttribute(key);
    if (key === 'class') el.setAttribute('class', value);
    else el.setAttribute(key, String(value));
  }
  return () => {
    for (const key of Object.keys(attrs)) {
      const old = previous[key];
      if (old === null || old === undefined) el.removeAttribute(key);
      else el.setAttribute(key, old);
    }
  };
}

function loadScript(src, type) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    if (type) script.type = type;
    script.async = false;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

export function PageRuntime({ config }) {
  useEffect(() => {
    document.title = config.title || '';
    const undoHtml = setAttrs(document.documentElement, config.htmlAttrs);
    const undoBody = setAttrs(document.body, config.bodyAttrs);

    const generated = [];
    const add = (el, parent = document.head) => {
      el.dataset.caliverGenerated = 'true';
      parent.appendChild(el);
      generated.push(el);
      return el;
    };

    // Recreate the original <meta>, <link>, and inline <style> head content.
    for (const attrs of config.metas || []) {
      const el = document.createElement('meta');
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, Array.isArray(value) ? value.join(' ') : String(value ?? ''));
      }
      add(el);
    }

    for (const attrs of config.links || []) {
      const el = document.createElement('link');
      for (const [key, value] of Object.entries(attrs)) {
        if (value === null || value === undefined) continue;
        el.setAttribute(key, Array.isArray(value) ? value.join(' ') : String(value));
      }
      add(el);
    }

    for (const css of config.styles || []) {
      const el = document.createElement('style');
      el.textContent = css;
      add(el);
    }

    // The original site relied on script order. Load each script sequentially
    // after the React DOM has mounted so the legacy behavior sees real elements.
    let cancelled = false;
    (async () => {
      for (const item of config.scripts || []) {
        if (cancelled) return;
        try {
          await loadScript(item.src, item.type || undefined);
        } catch (error) {
          console.error(error);
        }
      }
    })();

    return () => {
      cancelled = true;
      undoBody();
      undoHtml();
      generated.forEach((el) => el.remove());
    };
  }, [config]);

  return null;
}
