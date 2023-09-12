import { View, Text } from "react-native";
import React from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { Button } from "react-native";

const PdfGenerator = () => {
  const html = `
<div
  class="css-view-175oi2r"
  style="
    height: 100%;
    width: 100%;
    padding: 16px;
    background-color: rgb(255, 255, 255);
  "
>
  <div class="css-view-175oi2r" style="width: 100%; border: 2px solid black">
    <div
      class="css-view-175oi2r"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-bottom-width: 2px;
      "
    >
      <input
        placeholder="INVOICE"
        autocapitalize="sentences"
        autocomplete="on"
        autocorrect="on"
        dir="auto"
        rows="1"
        spellcheck="true"
        class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
        value=""
        style="
          font-family: ui-sans-serif;
          font-size: 30px;
          line-height: 36px;
          font-weight: bold;
          text-align: center;
          width: 100%;
        "
      />
    </div>
    <div class="css-view-175oi2r" style="width: 100%; padding: 8px">
      <div
        class="css-view-175oi2r"
        style="
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <div
          class="css-view-175oi2r"
          style="
            width: 50%;
            display: flex;
            flex-direction: row;
            margin-top: 8px;
            margin-bottom: 8px;
            align-items: center;
          "
        >
          <div
            dir="auto"
            class="css-text-146c3p1"
            style="
              font-size: 18px;
              line-height: 28px;
              font-family: ui-sans-serif;
            "
          >
            Invoice No :
          </div>
          <input
            autocapitalize="sentences"
            autocomplete="on"
            autocorrect="on"
            dir="auto"
            rows="1"
            spellcheck="true"
            class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
            value=""
            style="width: 29%; padding: 4px"
          />
        </div>
        <div
          class="css-view-175oi2r"
          style="
            width: 50%;
            display: flex;
            flex-direction: row;
            margin-top: 8px;
            margin-bottom: 8px;
          "
        >
          <div
            dir="auto"
            class="css-text-146c3p1"
            style="
              font-size: 18px;
              line-height: 28px;
              font-family: ui-sans-serif;
            "
          >
            Date :
          </div>
          <input
            autocapitalize="sentences"
            autocomplete="on"
            autocorrect="on"
            dir="auto"
            rows="1"
            spellcheck="true"
            class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
            value=""
            style="width: 100px; padding: 4px"
          />
        </div>
      </div>
      <div
        class="css-view-175oi2r"
        style="width: 100%; display: flex; flex-direction: column"
      >
        <div class="css-view-175oi2r" style="width: 100%">
          <div
            dir="auto"
            class="css-text-146c3p1"
            style="
              margin-top: 16px;
              margin-bottom: 16px;
              font-size: 20px;
              line-height: 28px;
              font-weight: bold;
              width: 100%;
              border-bottom-width: 2px;
              border-color: rgb(29, 78, 216);
            "
          >
            BILL TO :
          </div>
          <div
            class="css-view-175oi2r"
            style="
              border-radius: 6px;
              padding: 12px;
              background-color: rgb(239, 246, 255);
            "
          >
            <div
              class="css-view-175oi2r"
              style="
                display: flex;
                flex-direction: row;
                margin-top: 4px;
                margin-bottom: 4px;
              "
            >
              <div
                dir="auto"
                class="css-text-146c3p1"
                style="
                  font-family: ui-sans-serif;
                  font-size: 18px;
                  line-height: 28px;
                "
              >
                Name :
              </div>
              <input
                autocapitalize="sentences"
                autocomplete="on"
                autocorrect="on"
                dir="auto"
                rows="1"
                spellcheck="true"
                class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                value=""
                style="font-size: 18px; line-height: 28px; width: 80%"
              />
            </div>
            <div
              class="css-view-175oi2r"
              style="
                display: flex;
                flex-direction: column;
                margin-top: 4px;
                margin-bottom: 4px;
              "
            >
              <div
                dir="auto"
                class="css-text-146c3p1"
                style="
                  font-family: ui-sans-serif;
                  margin-bottom: 8px;
                  font-size: 18px;
                  line-height: 28px;
                "
              >
                Address :
              </div>
              <div class="css-view-175oi2r" style="padding-left: 12px">
                <input
                  placeholder="Street Adress"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                /><input
                  placeholder="City, State"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                /><input
                  placeholder="Zip"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                />
              </div>
            </div>
            <div class="css-view-175oi2r">
              <div
                class="css-view-175oi2r"
                style="
                  display: flex;
                  flex-direction: row;
                  margin-top: 4px;
                  margin-bottom: 4px;
                "
              >
                <div
                  dir="auto"
                  class="css-text-146c3p1"
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                >
                  Phone :
                </div>
                <input
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                    width: 80%;
                  "
                />
              </div>
              <div
                class="css-view-175oi2r"
                style="
                  display: flex;
                  flex-direction: row;
                  margin-top: 4px;
                  margin-bottom: 4px;
                "
              >
                <div
                  dir="auto"
                  class="css-text-146c3p1"
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                >
                  Email :
                </div>
                <input
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                    width: 80%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="css-view-175oi2r" style="width: 100%">
          <div
            dir="auto"
            class="css-text-146c3p1"
            style="
              margin-top: 16px;
              margin-bottom: 16px;
              font-size: 20px;
              line-height: 28px;
              font-weight: bold;
              width: 100%;
              border-bottom-width: 2px;
              border-color: rgb(29, 78, 216);
            "
          >
            FROM :
          </div>
          <div
            class="css-view-175oi2r"
            style="
              border-radius: 6px;
              padding: 12px;
              background-color: rgb(239, 246, 255);
            "
          >
            <div
              class="css-view-175oi2r"
              style="
                display: flex;
                flex-direction: row;
                margin-top: 4px;
                margin-bottom: 4px;
              "
            >
              <div
                dir="auto"
                class="css-text-146c3p1"
                style="
                  font-family: ui-sans-serif;
                  font-size: 18px;
                  line-height: 28px;
                "
              >
                Name :
              </div>
              <input
                autocapitalize="sentences"
                autocomplete="on"
                autocorrect="on"
                dir="auto"
                rows="1"
                spellcheck="true"
                class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                value=""
                style="width: 80%"
              />
            </div>
            <div
              class="css-view-175oi2r"
              style="
                display: flex;
                flex-direction: column;
                margin-top: 4px;
                margin-bottom: 4px;
              "
            >
              <div
                dir="auto"
                class="css-text-146c3p1"
                style="
                  font-family: ui-sans-serif;
                  margin-bottom: 8px;
                  font-size: 18px;
                  line-height: 28px;
                "
              >
                Address :
              </div>
              <div class="css-view-175oi2r" style="padding-left: 12px">
                <input
                  placeholder="Street Adress"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                /><input
                  placeholder="City, State"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                /><input
                  placeholder="Zip"
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                />
              </div>
            </div>
            <div class="css-view-175oi2r">
              <div
                class="css-view-175oi2r"
                style="
                  display: flex;
                  flex-direction: row;
                  margin-top: 4px;
                  margin-bottom: 4px;
                "
              >
                <div
                  dir="auto"
                  class="css-text-146c3p1"
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                >
                  Phone :
                </div>
                <input
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                    width: 80%;
                  "
                />
              </div>
              <div
                class="css-view-175oi2r"
                style="
                  display: flex;
                  flex-direction: row;
                  margin-top: 4px;
                  margin-bottom: 4px;
                "
              >
                <div
                  dir="auto"
                  class="css-text-146c3p1"
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                  "
                >
                  Phone :
                </div>
                <input
                  autocapitalize="sentences"
                  autocomplete="on"
                  autocorrect="on"
                  dir="auto"
                  rows="1"
                  spellcheck="true"
                  class="css-textinput-11aywtz r-placeholderTextColor-6taxm2"
                  value=""
                  style="
                    font-family: ui-sans-serif;
                    font-size: 18px;
                    line-height: 28px;
                    width: 80%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="css-view-175oi2r"
    style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 16px;
      padding-right: 16px;
    "
  >
    <div
      tabindex="0"
      class="css-view-175oi2r r-transitionProperty-1i6wzkk r-userSelect-lrvibr r-cursor-1loqt21 r-touchAction-1otgn73"
      style="
        padding: 6px 8px;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: rgb(246, 161, 146);
        transition-duration: 0s;
      "
    >
      <div dir="auto" class="css-text-146c3p1">Save</div>
    </div>
    <div
      tabindex="0"
      class="css-view-175oi2r r-transitionProperty-1i6wzkk r-userSelect-lrvibr r-cursor-1loqt21 r-touchAction-1otgn73"
      style="
        padding: 6px 8px;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: rgb(246, 161, 146);
        transition-duration: 0s;
      "
    >
      <div dir="auto" class="css-text-146c3p1">Reset</div>
    </div>
  </div>
</div>

`;
  const generatePDF = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
  };

  return (
    <View>
      <Button title="Generate Pdf" onPress={() => generatePDF()} />
    </View>
  );
};

export default PdfGenerator;
