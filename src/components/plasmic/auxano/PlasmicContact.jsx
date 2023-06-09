// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: m0O9QXIre9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavBarFinal from "../../NavBarFinal"; // plasmic-import: Ba2YaKrrpo/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: EYHwZh9ILg/codeComponent
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponent
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponentHelper
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponent
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponentHelper
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import Footer from "../../Footer"; // plasmic-import: 6NjpMkUH8g-/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: m0O9QXIre9/css
import IconOutlinephoneIcon from "./icons/PlasmicIcon__IconOutlinephone"; // plasmic-import: 4byTu4Is8/icon
import IconOutlinedeviceMobileIcon from "./icons/PlasmicIcon__IconOutlinedeviceMobile"; // plasmic-import: ZFatQPHDzg/icon
import IconOutlinemailIcon from "./icons/PlasmicIcon__IconOutlinemail"; // plasmic-import: 6-caiXs_Q5/icon

export const PlasmicContact__VariantProps = new Array();

export const PlasmicContact__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicContact__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form2.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textArea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <NavBarFinal
              data-plasmic-name={"navBarFinal"}
              data-plasmic-override={overrides.navBarFinal}
              className={classNames("__wab_instance", sty.navBarFinal)}
            />

            <div
              data-plasmic-name={"frame26"}
              data-plasmic-override={overrides.frame26}
              className={classNames(projectcss.all, sty.frame26)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"header2"}
                data-plasmic-override={overrides.header2}
                hasGap={true}
                className={classNames(projectcss.all, sty.header2)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"content"}
                  data-plasmic-override={overrides.content}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.content)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame39"}
                    data-plasmic-override={overrides.frame39}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame39)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nQ4Vb
                      )}
                    >
                      {"About us."}
                    </div>
                  </p.Stack>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cDI
                    )}
                  >
                    {
                      "Unlocking Business Potential with \nTailored Solutions and the ABC's of Business Rescue"
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </div>
          </section>
          <section
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            className={classNames(projectcss.all, sty.body)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__e1IW)}>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame2399"}
                  data-plasmic-override={overrides.frame2399}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame2399)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"upper"}
                    data-plasmic-override={overrides.upper}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.upper)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__guUjB
                      )}
                    >
                      {"Get in touch"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vgrrx
                      )}
                    >
                      {
                        "Reach Out to Our Team for Professional Support and Inquiries"
                      }
                    </div>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"phone"}
                      data-plasmic-override={overrides.phone}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.phone)}
                    >
                      <IconOutlinephoneIcon
                        className={classNames(projectcss.all, sty.svg___374Oe)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___07Yfj
                        )}
                      >
                        {"+27 (0)11 568 4212"}
                      </div>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"secondPhone"}
                      data-plasmic-override={overrides.secondPhone}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.secondPhone)}
                    >
                      <IconOutlinedeviceMobileIcon
                        className={classNames(projectcss.all, sty.svg__wpC9G)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___0MefW
                        )}
                      >
                        {"+27 (0)72 746 9242"}
                      </div>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"mail"}
                      data-plasmic-override={overrides.mail}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.mail)}
                    >
                      <IconOutlinemailIcon
                        className={classNames(projectcss.all, sty.svg___4KgUa)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5RXnT
                        )}
                      >
                        {"info@auxano.co.za"}
                      </div>
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column__v3HaK)}>
                <FormWrapper
                  data-plasmic-name={"form2"}
                  data-plasmic-override={overrides.form2}
                  className={classNames("__wab_instance", sty.form2)}
                  extendedOnValuesChange={p.generateStateOnChangeProp($state, [
                    "form2",
                    "value"
                  ])}
                  formItems={[
                    { label: "Name", name: "name", inputType: "Text" },
                    {
                      label: "Message",
                      name: "message",
                      inputType: "Text Area"
                    }
                  ]}
                  labelCol={{ span: 8, horizontalOnly: true }}
                  layout={"vertical"}
                  mode={"simplified"}
                  onFinish={async values => {
                    const $steps = {};
                    $steps["updateForm2Value"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariable",
                                interactionUuid: "MNVshfA_4",
                                componentUuid: "m0O9QXIre9",
                                argName: "variable"
                              },
                              () => ({
                                objRoot: $state,
                                variablePath: ["form2", "value"]
                              })
                            ),

                            operation: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariable",
                                interactionUuid: "MNVshfA_4",
                                componentUuid: "m0O9QXIre9",
                                argName: "operation"
                              },
                              () => 0
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "updateVariable",
                              interactionUuid: "MNVshfA_4",
                              componentUuid: "m0O9QXIre9"
                            },
                            () =>
                              (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;
                                p.set(objRoot, variablePath, value);
                                return value;
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["updateForm2Value"] === "object" &&
                      typeof $steps["updateForm2Value"].then === "function"
                    ) {
                      $steps["updateForm2Value"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "MNVshfA_4",
                          componentUuid: "m0O9QXIre9"
                        },
                        $steps["updateForm2Value"]
                      );
                    }
                  }}
                  wrapperCol={{ span: 16, horizontalOnly: true }}
                >
                  {true ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox)}
                    >
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__u42Fz
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__gz3Wa
                            )}
                          >
                            {"Name"}
                          </div>
                        }
                        name={"name"}
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames("__wab_instance", sty.input),
                            onChange:
                              p.generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["input", "value"],
                                AntdInput_Helpers
                              ),

                            value: p.generateStateValueProp($state, [
                              "input",
                              "value"
                            ])
                          };
                          p.initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "input.value"
                              }
                            ],

                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdInput
                              data-plasmic-name={"input"}
                              data-plasmic-override={overrides.input}
                              {...child$Props}
                            />
                          );
                        })()}
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__eVvM
                        )}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__omNrs
                            )}
                          >
                            {"Email"}
                          </div>
                        }
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames("__wab_instance", sty.input3),
                            onChange:
                              p.generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["input3", "value"],
                                AntdInput_Helpers
                              ),

                            value: p.generateStateValueProp($state, [
                              "input3",
                              "value"
                            ])
                          };
                          p.initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "input3.value"
                              }
                            ],

                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );

                          return (
                            <AntdInput
                              data-plasmic-name={"input3"}
                              data-plasmic-override={overrides.input3}
                              {...child$Props}
                            />
                          );
                        })()}
                      </FormItemWrapper>
                    </p.Stack>
                  ) : null}
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField___34IgX
                    )}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__as3Vl
                        )}
                      >
                        {"How can we help you ?"}
                      </div>
                    }
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.input2),
                        onChange: p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["input2", "value"],
                          AntdInput_Helpers
                        ),

                        value: p.generateStateValueProp($state, [
                          "input2",
                          "value"
                        ])
                      };
                      p.initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "input2.value"
                          }
                        ],

                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdInput
                          data-plasmic-name={"input2"}
                          data-plasmic-override={overrides.input2}
                          {...child$Props}
                        />
                      );
                    })()}
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__l1Rtp
                    )}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__l53YS
                        )}
                      >
                        {"Message"}
                      </div>
                    }
                    name={"message"}
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.textArea),
                        onChange: p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["textArea", "value"],
                          AntdTextArea_Helpers
                        ),

                        value: p.generateStateValueProp($state, [
                          "textArea",
                          "value"
                        ])
                      };
                      p.initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "textArea.value"
                          }
                        ],

                        [],
                        AntdTextArea_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdTextArea
                          data-plasmic-name={"textArea"}
                          data-plasmic-override={overrides.textArea}
                          {...child$Props}
                        />
                      );
                    })()}
                  </FormItemWrapper>
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    shape={"default"}
                    size={"large"}
                    submitsForm={true}
                    type={"primary"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cbtQa
                      )}
                    >
                      {"Submit"}
                    </div>
                  </AntdButton>
                </FormWrapper>
              </div>
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              hasGap={true}
              className={classNames(projectcss.all, sty.section)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"upper2"}
                data-plasmic-override={overrides.upper2}
                hasGap={true}
                className={classNames(projectcss.all, sty.upper2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bz8NH
                  )}
                >
                  {"Our Offices"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___09SYs
                  )}
                >
                  {
                    "Our goal and vision remain steadfast in that we consistently strive to be the leading\ncompetitively business consultancy in South Africa"
                  }
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                data-plasmic-name={"addresses"}
                data-plasmic-override={overrides.addresses}
                hasGap={true}
                className={classNames(projectcss.all, sty.addresses)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"nelspruit"}
                  data-plasmic-override={overrides.nelspruit}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.nelspruit)}
                >
                  <div
                    data-plasmic-name={"nelspruit2"}
                    data-plasmic-override={overrides.nelspruit2}
                    className={classNames(projectcss.all, sty.nelspruit2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__g3BYs
                      )}
                    >
                      {"Nelspruit"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hmGsb
                    )}
                  >
                    {
                      "7 Oak, Yardley Village\nDr. Enos Mabusa Drive West Acres\nNelspruit 1211"
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"headoffice"}
                  data-plasmic-override={overrides.headoffice}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.headoffice)}
                >
                  <div
                    data-plasmic-name={"headOfficeJhb"}
                    data-plasmic-override={overrides.headOfficeJhb}
                    className={classNames(projectcss.all, sty.headOfficeJhb)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__deJRd
                      )}
                    >
                      {"Head office (JHB)"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sb6Tx
                    )}
                  >
                    {
                      "165 West Street\nCnr west & Freedman drive Sandown\nSandton City 2196"
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"polokwane"}
                  data-plasmic-override={overrides.polokwane}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.polokwane)}
                >
                  <div
                    data-plasmic-name={"polokwane2"}
                    data-plasmic-override={overrides.polokwane2}
                    className={classNames(projectcss.all, sty.polokwane2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6Io5U
                      )}
                    >
                      {"Polokwane"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s9NYp
                    )}
                  >
                    {"3 Gar Street\nEmdo Polokwane\n0699"}
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"pta"}
                  data-plasmic-override={overrides.pta}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.pta)}
                >
                  <div
                    data-plasmic-name={"pretoria"}
                    data-plasmic-override={overrides.pretoria}
                    className={classNames(projectcss.all, sty.pretoria)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kBdCm
                      )}
                    >
                      {"Pretoria"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bMrpy
                    )}
                  >
                    {"449 Neser Street\nGarsfontein Pretoria\n0042"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>
          <section className={classNames(projectcss.all, sty.section__geRga)}>
            <Footer className={classNames("__wab_instance", sty.footer__nE2)} />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "navBarFinal",
    "frame26",
    "header2",
    "content",
    "frame39",
    "body",
    "columns",
    "frame2399",
    "upper",
    "phone",
    "secondPhone",
    "mail",
    "form2",
    "freeBox",
    "input",
    "input3",
    "input2",
    "textArea",
    "button",
    "section",
    "upper2",
    "addresses",
    "nelspruit",
    "nelspruit2",
    "headoffice",
    "headOfficeJhb",
    "polokwane",
    "polokwane2",
    "pta",
    "pretoria"
  ],

  header: ["header", "navBarFinal", "frame26", "header2", "content", "frame39"],
  navBarFinal: ["navBarFinal"],
  frame26: ["frame26", "header2", "content", "frame39"],
  header2: ["header2", "content", "frame39"],
  content: ["content", "frame39"],
  frame39: ["frame39"],
  body: [
    "body",
    "columns",
    "frame2399",
    "upper",
    "phone",
    "secondPhone",
    "mail",
    "form2",
    "freeBox",
    "input",
    "input3",
    "input2",
    "textArea",
    "button",
    "section",
    "upper2",
    "addresses",
    "nelspruit",
    "nelspruit2",
    "headoffice",
    "headOfficeJhb",
    "polokwane",
    "polokwane2",
    "pta",
    "pretoria"
  ],

  columns: [
    "columns",
    "frame2399",
    "upper",
    "phone",
    "secondPhone",
    "mail",
    "form2",
    "freeBox",
    "input",
    "input3",
    "input2",
    "textArea",
    "button"
  ],

  frame2399: ["frame2399", "upper", "phone", "secondPhone", "mail"],
  upper: ["upper", "phone", "secondPhone", "mail"],
  phone: ["phone"],
  secondPhone: ["secondPhone"],
  mail: ["mail"],
  form2: [
    "form2",
    "freeBox",
    "input",
    "input3",
    "input2",
    "textArea",
    "button"
  ],

  freeBox: ["freeBox", "input", "input3"],
  input: ["input"],
  input3: ["input3"],
  input2: ["input2"],
  textArea: ["textArea"],
  button: ["button"],
  section: [
    "section",
    "upper2",
    "addresses",
    "nelspruit",
    "nelspruit2",
    "headoffice",
    "headOfficeJhb",
    "polokwane",
    "polokwane2",
    "pta",
    "pretoria"
  ],

  upper2: ["upper2"],
  addresses: [
    "addresses",
    "nelspruit",
    "nelspruit2",
    "headoffice",
    "headOfficeJhb",
    "polokwane",
    "polokwane2",
    "pta",
    "pretoria"
  ],

  nelspruit: ["nelspruit", "nelspruit2"],
  nelspruit2: ["nelspruit2"],
  headoffice: ["headoffice", "headOfficeJhb"],
  headOfficeJhb: ["headOfficeJhb"],
  polokwane: ["polokwane", "polokwane2"],
  polokwane2: ["polokwane2"],
  pta: ["pta", "pretoria"],
  pretoria: ["pretoria"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navBarFinal: makeNodeComponent("navBarFinal"),
    frame26: makeNodeComponent("frame26"),
    header2: makeNodeComponent("header2"),
    content: makeNodeComponent("content"),
    frame39: makeNodeComponent("frame39"),
    body: makeNodeComponent("body"),
    columns: makeNodeComponent("columns"),
    frame2399: makeNodeComponent("frame2399"),
    upper: makeNodeComponent("upper"),
    phone: makeNodeComponent("phone"),
    secondPhone: makeNodeComponent("secondPhone"),
    mail: makeNodeComponent("mail"),
    form2: makeNodeComponent("form2"),
    freeBox: makeNodeComponent("freeBox"),
    input: makeNodeComponent("input"),
    input3: makeNodeComponent("input3"),
    input2: makeNodeComponent("input2"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    section: makeNodeComponent("section"),
    upper2: makeNodeComponent("upper2"),
    addresses: makeNodeComponent("addresses"),
    nelspruit: makeNodeComponent("nelspruit"),
    nelspruit2: makeNodeComponent("nelspruit2"),
    headoffice: makeNodeComponent("headoffice"),
    headOfficeJhb: makeNodeComponent("headOfficeJhb"),
    polokwane: makeNodeComponent("polokwane"),
    polokwane2: makeNodeComponent("polokwane2"),
    pta: makeNodeComponent("pta"),
    pretoria: makeNodeComponent("pretoria"),
    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Contact Us",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
