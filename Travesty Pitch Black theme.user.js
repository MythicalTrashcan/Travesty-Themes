// ==UserScript==
// @name         Travesty Pitch Black theme
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  Pitch black theme for Travesty
// @author       1_Mythical
// @match        https://alpha.travesty.chat/*
// @icon         https://alpha.travesty.chat/logo.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // This sets the chakra color scheme to dark just in case a user somehow has it set to light
    localStorage.setItem("chakra-ui-color-mode", "dark");

    // Turns out both of these colors should be white in a pitch black theme
    document.documentElement.style.setProperty("--chakra-colors-white", "#ffffff");
    document.documentElement.style.setProperty("--chakra-colors-black", "#ffffff");

    // Member list
    document.documentElement.style.setProperty("--chakra-colors-memberList", "#000000");
    // This is quite literaly the + button for attachments
    document.documentElement.style.setProperty("--chakra-colors-iconColor", "#8b8b8b");
    // Account bar at the bottom left corner
    document.documentElement.style.setProperty("--chakra-colors-accountBar", "#000000");
    // The message box
    document.documentElement.style.setProperty("--chakra-colors-messageInput", "#000000");
    // All of these were just shades of grey which were set the pitch black
    document.documentElement.style.setProperty("--chakra-colors-brandGray-darker", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-light", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-dark", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-active", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-hover", "#000000");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-accent", "#8b8b8b");
    // This is the color used in the "Add Friend" box and the + button for adding servers
    document.documentElement.style.setProperty("--chakra-colors-brandGreen", "#01532d");
    // This red seems to only be used for new DM's, friend requests, and the "Pending" button on the main page
    document.documentElement.style.setProperty("--chakra-colors-menuRed", "#730000");

    // This is just to be able to set all the css easily in one place with actual css code
    const style = document.createElement('style');
    style.innerHTML = `
        /* The body element */
        body {
            background-color: #000000;
        }

        /* The scrollbar used when in a channel on a server */
        .css-9udf7b::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }

        /* The scrollbar used when scrolling through the friends list */
        .css-1gbighu::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0);
        }

        /* The channel lists when in a server */
        .css-8r9gla {
            border-width: 1px;
            border-top: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        /* The server sidebar with all the servers, the home button, and the + button for adding servers */
        .css-z6wft2 {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        /* The server title and the dropdown for server management if you are a server owner */
        .css-164bh9z {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        /* The account bar at the bottom left corner */
        .css-174u0o2 {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        /* The member list at the right when in a server */
        .css-1vtlm7k {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-right: 0px;
            border-color: #393939;
        }

        /* The direct message and friend list only on the home screen */
        .css-1x016yl {
            border-width: 1px;
            border-top: 0px;
            border-bottom: 0px;
            border-left: 0px;
            border-color: #393939;
        }

        /* The bar that lets you add friends by userid and view your friends list and pending friend requests */
        .css-1nnh735 {
            border-width: 1px;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            border-color: #393939;
        }

        /* The message box when in a channel on a server */
        .css-11pna72 {
            box-shadow: #393939 0px 0px 0px 1px;
        }
    `;
    document.head.appendChild(style);
})();