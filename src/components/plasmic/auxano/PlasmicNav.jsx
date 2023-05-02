// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: s6BAdvu7gu
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicNav.module.css"; // plasmic-import: s6BAdvu7gu/css
import logo212XpngXScDVnNt from "./images/logo212Xpng.png"; // plasmic-import: xScDVn-NT/picture

export const PlasmicNav__VariantProps = new Array();

export const PlasmicNav__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNav__RenderFunc(props) {
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
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <a
          className={classNames(projectcss.all, projectcss.a, sty.link__gq238)}
          href={"#"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: logo212XpngXScDVnNt,
              fullWidth: 439,
              fullHeight: 134,
              aspectRatio: undefined
            }}
          />
        </a>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__foVsl)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ly3Hx
            )}
            href={"/"}
          >
            {"Home"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___6RgPa
            )}
            href={"/"}
          >
            {"About"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__dtthL
            )}
            href={"/"}
          >
            {"Contact"}
          </a>
        </React.Fragment>
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__zu6UJ)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNav__ArgProps,
          internalVariantPropNames: PlasmicNav__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNav";
  } else {
    func.displayName = `PlasmicNav.${nodeName}`;
  }
  return func;
}

export const PlasmicNav = Object.assign(
  // Top-level PlasmicNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicNav
    internalVariantProps: PlasmicNav__VariantProps,
    internalArgProps: PlasmicNav__ArgProps
  }
);

export default PlasmicNav;
/* prettier-ignore-end */
