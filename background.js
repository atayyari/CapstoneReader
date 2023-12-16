(function(e, t, n, a, o) {
  const s = e.local;
  /*
  t.onInstalled.addListener(async (e) => {
    e.previousVersion !== t.getManifest().version && s.set({
      config: {}
    });
    t.setUninstallURL(ON_UNINSTALL_OPEN_URL);
    e.reason === t.OnInstalledReason.INSTALL && n.create({
      url: ON_INSTALL_OPEN_URL
    });
    o.removeAll(() => {
      o.create({
        id: "rate",
        title: `${a.getMessage("please_rate")} ★★★★★`,
        contexts: ["action", "browser_action", "page_action"]
      })
    });
  });
  */

  e.onChanged.addListener((e, t) => {
    if (void 0 !== e.config?.newValue?.muteSounds) {
      function a(e) {
        n.query({}, (t) => {
          t.forEach((t) => {
            n.update(t.id, {
              muted: e
            });
          })
        })
      }
      a(e.config.newValue.muteSounds);
    }
  });

  t.onMessage.addListener((e, t, n) => {
    if ("getMyInfo" === e.m) {
      n({
        tabId: t?.tab?.id,
        frameId: t?.frameId
      });
    } else if (n) {
      n();
    }
  });

  n.onCreated.addListener((e) => {
    s.get(["config"], (t) => {
      const a = t.config?.muteSounds;
      n.update(e.id, {
        muted: a ?? !1
      });
    });
  });
})(chrome.storage, chrome.runtime, chrome.tabs, chrome.i18n, chrome.contextMenus);
