// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: NaO7GDEY89
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicAuxanoNavbar.module.css"; // plasmic-import: NaO7GDEY89/css
import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: ARaGWbusD/icon
import Vector2Icon from "./icons/PlasmicIcon__Vector2"; // plasmic-import: 54fgFiIVv2/icon
import Vector3Icon from "./icons/PlasmicIcon__Vector3"; // plasmic-import: FvtAmqf4DD/icon
import Vector4Icon from "./icons/PlasmicIcon__Vector4"; // plasmic-import: Af8W2fKOCs/icon
import Vector5Icon from "./icons/PlasmicIcon__Vector5"; // plasmic-import: vTWh1pCPXu/icon
import Vector6Icon from "./icons/PlasmicIcon__Vector6"; // plasmic-import: m2ezYW9JIc/icon
import Vector7Icon from "./icons/PlasmicIcon__Vector7"; // plasmic-import: PqQwYULlsQ/icon
import vector8MSbhKZZa from "./images/vector8.svg"; // plasmic-import: mSbh-K_ZZa/picture
import vector9B5G8TSvIl from "./images/vector9.svg"; // plasmic-import: B5_g8tSvIL/picture

export const PlasmicAuxanoNavbar__VariantProps = new Array();

export const PlasmicAuxanoNavbar__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAuxanoNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbmXrKiwboivdw()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        hasGap={true}
        className={classNames(projectcss.all, sty.navbar)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"logo21"}
          data-plasmic-override={overrides.logo21}
          hasGap={true}
          className={classNames(projectcss.all, sty.logo21)}
        >
          <div
            data-plasmic-name={"layer2"}
            data-plasmic-override={overrides.layer2}
            className={classNames(projectcss.all, sty.layer2)}
          >
            <div
              data-plasmic-name={"layer1"}
              data-plasmic-override={overrides.layer1}
              className={classNames(projectcss.all, sty.layer1)}
            >
              <VectorIcon
                className={classNames(projectcss.all, sty.svg__cFZoZ)}
                role={"img"}
              />

              <Vector2Icon
                className={classNames(projectcss.all, sty.svg__vftPc)}
                role={"img"}
              />

              <Vector3Icon
                className={classNames(projectcss.all, sty.svg__jv8ZR)}
                role={"img"}
              />

              <Vector4Icon
                className={classNames(projectcss.all, sty.svg__eh9Cr)}
                role={"img"}
              />

              <Vector5Icon
                className={classNames(projectcss.all, sty.svg__n77AV)}
                role={"img"}
              />

              <Vector6Icon
                className={classNames(projectcss.all, sty.svg__oc3WX)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rCAu1
                )}
              >
                {"BUSINESS CONSULTING"}
              </div>
              <Vector7Icon
                className={classNames(projectcss.all, sty.svg__e5Rk)}
                role={"img"}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___8QIu)}
                displayHeight={"45px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"38px"}
                loading={"lazy"}
                src={{
                  src: vector8MSbhKZZa,
                  fullWidth: 38,
                  fullHeight: 45,
                  aspectRatio: 0.844444
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__tE7H7)}
                displayHeight={"67px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: vector9B5G8TSvIl,
                  fullWidth: 42,
                  fullHeight: 67,
                  aspectRatio: 0.626866
                }}
              />
            </div>
          </div>
        </p.Stack>
        <div
          data-plasmic-name={"links"}
          data-plasmic-override={overrides.links}
          className={classNames(projectcss.all, sty.links)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"linkItem"}
            data-plasmic-override={overrides.linkItem}
            hasGap={true}
            className={classNames(projectcss.all, sty.linkItem)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uz2P
              )}
            >
              {"Home"}
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"linkItem2"}
            data-plasmic-override={overrides.linkItem2}
            hasGap={true}
            className={classNames(projectcss.all, sty.linkItem2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kPo3Q
              )}
            >
              {"About"}
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"linkItem3"}
            data-plasmic-override={overrides.linkItem3}
            hasGap={true}
            className={classNames(projectcss.all, sty.linkItem3)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eAun2
              )}
            >
              {"Services"}
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"linkItem4"}
            data-plasmic-override={overrides.linkItem4}
            hasGap={true}
            className={classNames(projectcss.all, sty.linkItem4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dGgBc
              )}
            >
              {"Contact"}
            </div>
          </p.Stack>
        </div>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"navItems"}
            data-plasmic-override={overrides.navItems}
            hasGap={true}
            className={classNames(projectcss.all, sty.navItems)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              hasGap={true}
              className={classNames(projectcss.all, sty.button)}
            >
              <div
                data-plasmic-name={"getInTouch"}
                data-plasmic-override={overrides.getInTouch}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.getInTouch
                )}
              >
                {"Get in touch "}
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"button2"}
              data-plasmic-override={overrides.button2}
              hasGap={true}
              className={classNames(projectcss.all, sty.button2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__klc5V
                )}
              >
                {"Let us  call you"}
              </div>
            </p.Stack>
          </p.Stack>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "logo21",
    "layer2",
    "layer1",
    "links",
    "linkItem",
    "linkItem2",
    "linkItem3",
    "linkItem4",
    "navItems",
    "button",
    "getInTouch",
    "button2"
  ],

  navbar: [
    "navbar",
    "logo21",
    "layer2",
    "layer1",
    "links",
    "linkItem",
    "linkItem2",
    "linkItem3",
    "linkItem4",
    "navItems",
    "button",
    "getInTouch",
    "button2"
  ],

  logo21: ["logo21", "layer2", "layer1"],
  layer2: ["layer2", "layer1"],
  layer1: ["layer1"],
  links: ["links", "linkItem", "linkItem2", "linkItem3", "linkItem4"],
  linkItem: ["linkItem"],
  linkItem2: ["linkItem2"],
  linkItem3: ["linkItem3"],
  linkItem4: ["linkItem4"],
  navItems: ["navItems", "button", "getInTouch", "button2"],
  button: ["button", "getInTouch"],
  getInTouch: ["getInTouch"],
  button2: ["button2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAuxanoNavbar__ArgProps,
          internalVariantPropNames: PlasmicAuxanoNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAuxanoNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuxanoNavbar";
  } else {
    func.displayName = `PlasmicAuxanoNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicAuxanoNavbar = Object.assign(
  // Top-level PlasmicAuxanoNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    logo21: makeNodeComponent("logo21"),
    layer2: makeNodeComponent("layer2"),
    layer1: makeNodeComponent("layer1"),
    links: makeNodeComponent("links"),
    linkItem: makeNodeComponent("linkItem"),
    linkItem2: makeNodeComponent("linkItem2"),
    linkItem3: makeNodeComponent("linkItem3"),
    linkItem4: makeNodeComponent("linkItem4"),
    navItems: makeNodeComponent("navItems"),
    button: makeNodeComponent("button"),
    getInTouch: makeNodeComponent("getInTouch"),
    button2: makeNodeComponent("button2"),
    // Metadata about props expected for PlasmicAuxanoNavbar
    internalVariantProps: PlasmicAuxanoNavbar__VariantProps,
    internalArgProps: PlasmicAuxanoNavbar__ArgProps
  }
);

export default PlasmicAuxanoNavbar;
/* prettier-ignore-end */
