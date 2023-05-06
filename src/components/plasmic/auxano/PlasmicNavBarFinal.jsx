// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: Ba2YaKrrpo
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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicNavBarFinal.module.css"; // plasmic-import: Ba2YaKrrpo/css
import logo212XpngXScDVnNt from "./images/logo212Xpng.png"; // plasmic-import: xScDVn-NT/picture

export const PlasmicNavBarFinal__VariantProps = new Array();

export const PlasmicNavBarFinal__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavBarFinal__RenderFunc(props) {
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
          className={classNames(projectcss.all, projectcss.a, sty.link__izlHl)}
          href={"#"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__nyGwu)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "40px"
                : hasVariant(globalVariants, "screen", "tabletOnly")
                ? "40px"
                : "80px"
            }
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
          className={classNames(sty.img__v1ND)}
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
        true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gHfGj
              )}
              href={`/`}
            >
              {"Home"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jYus5
              )}
              href={`/about`}
            >
              {"About"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__lYrGj
              )}
              href={`/services`}
            >
              {"Services"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6IxZd
              )}
              href={`/contact`}
            >
              {"Contact"}
            </a>
          </p.Stack>
        ) : null
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__xZqvT)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "32px"
              : hasVariant(globalVariants, "screen", "tabletOnly")
              ? "32px"
              : "auto"
          }
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBarFinal__ArgProps,
          internalVariantPropNames: PlasmicNavBarFinal__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavBarFinal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBarFinal";
  } else {
    func.displayName = `PlasmicNavBarFinal.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBarFinal = Object.assign(
  // Top-level PlasmicNavBarFinal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicNavBarFinal
    internalVariantProps: PlasmicNavBarFinal__VariantProps,
    internalArgProps: PlasmicNavBarFinal__ArgProps
  }
);

export default PlasmicNavBarFinal;
/* prettier-ignore-end */