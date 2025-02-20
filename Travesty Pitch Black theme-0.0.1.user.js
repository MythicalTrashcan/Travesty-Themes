// ==UserScript==
// @name         Travesty Pitch Black theme
// @namespace    http://tampermonkey.net/
// @version      0.0.1
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
    document.documentElement.style.setProperty("--chakra-colors-brandGreen", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-hover", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-accent", "#8b8b8b");

    const style = document.createElement('style');
    style.innerHTML = `
        .css-9udf7b::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }

        .css-1gbighu::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }
    `;
    document.head.appendChild(style);
})();