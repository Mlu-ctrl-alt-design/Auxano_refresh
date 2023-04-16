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
import logo21Png6W6DQyfAv from "./images/logo21Png.png"; // plasmic-import: 6w6DQyfAv/picture

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
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "auto"
                : "auto"
            }
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: logo21Png6W6DQyfAv,
              fullWidth: 220,
              fullHeight: 68,
              aspectRatio: undefined
            }}
          />
        </p.Stack>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <svg
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
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
        ) : null}
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
    "img",
    "svg",
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
    "img",
    "svg",
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

  logo21: ["logo21", "img"],
  img: ["img"],
  svg: ["svg"],
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
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),
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
