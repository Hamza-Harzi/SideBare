import { E as ElButton } from './el-button-922e6ae8.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './index-eda2825b.mjs';
import 'lodash-unified';
import '@vue/shared';
import './base-202bf415.mjs';
import './use-form-item-a204866e.mjs';
import '@ctrl/tinycolor';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_button = ElButton;
  _push(`<!--[--><div><div><h1>About</h1><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum, quisquam voluptatibus quasi distinctio fugiat repellat nam vitae iusto similique omnis, dolor magnam. Est tempore vel aperiam voluptate non. Aspernatur! </p></div></div>`);
  _push(ssrRenderComponent(_component_el_button, {
    type: "info",
    round: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Info`);
      } else {
        return [
          createTextVNode("Info")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-28c4878f.mjs.map
