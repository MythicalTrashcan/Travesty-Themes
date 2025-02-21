// ==UserScript==
// @name         Travesty Pitch Black theme
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  Pitch black theme for Travesty
// @author       1_Mythical
// @match        https://alpha.travesty.chat/*
// @icon         https://alpha.travesty.chat/logo.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    localStorage.setItem("chakra-ui-color-mode", "dark");

    document.documentElement.style.setProperty("--chakra-colors-white", "#ffffff");
    document.documentElement.style.setProperty("--chakra-colors-black", "#ffffff");

    document.documentElement.style.setProperty("--chakra-colors-memberList", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-iconColor", "#8b8b8b");
    document.documentElement.style.setProperty("--chakra-colors-accountBar", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-messageInput", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-darker", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-light", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-dark", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-active", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-hover", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-accent", "#8b8b8b");
    document.documentElement.style.setProperty("--chakra-colors-brandGreen", "#01532d");
    document.documentElement.style.setProperty("--chakra-colors-menuRed", "#730000");

    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background-color: #000000;
        }

        .css-9udf7b::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }

        .css-1gbighu::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }

        .css-8r9gla {
            border-width: 1px;
            border-top: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        .css-z6wft2 {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        .css-164bh9z {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        .css-174u0o2 {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        .css-1vtlm7k {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-right: 0px;
            border-color: #393939;
        }

        .css-1x016yl {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        .css-1nnh735 {
            border-width: 1px;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            border-color: #393939;
        }

        .css-11pna72 {
        box-shadow: #393939 0px 0px 0px 1px;
    `;
    document.head.appendChild(style);
})();