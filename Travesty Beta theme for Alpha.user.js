// ==UserScript==
// @name         Travesty Pitch Black theme
// @namespace    http://tampermonkey.net/
// @version      0.0.2
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
    document.documentElement.style.setProperty("--chakra-colors-memberList", "#262736");
    // This is quite literaly the + button for attachments
    document.documentElement.style.setProperty("--chakra-colors-iconColor", "#97969E");
    // Account bar at the bottom left corner
    document.documentElement.style.setProperty("--chakra-colors-accountBar", "#191A2A");
    // The message box
    document.documentElement.style.setProperty("--chakra-colors-messageInput", "#5B5D6B");
    // All of these were just shades of grey which were set the pitch black
    document.documentElement.style.setProperty("--chakra-colors-brandGray-darker", "#111123");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-light", "#636675");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-dark", "#262736");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-active", "#20212D");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-hover", "#757789");
    document.documentElement.style.setProperty("--chakra-colors-brandGray-accent", "#ffffff");
    // This is the color used in the "Add Friend" box and the + button for adding servers
    document.documentElement.style.setProperty("--chakra-colors-brandGreen", "#20C507");
    // This red seems to only be used for new DM's, friend requests, and the "Pending" button on the main page
    document.documentElement.style.setProperty("--chakra-colors-menuRed", "#f04747");
    document.documentElement.style.setProperty("--chakra-colors-highlight-standard", "#040CA2");

    document.documentElement.style.setProperty("--chakra-colors-green-500", "#13AA01");

    // This is just to be able to set all the css easily in one place with actual css code
    const style = document.createElement('style');
    style.innerHTML = `
        /* The body element */
        body {
            background-color: #000000;
        }

        /* The scrollbar used when in a channel on a server */
        .css-9udf7b::-webkit-scrollbar-track {
            background-color: #4A4C56;
        }

        /* The scrollbar used when scrolling through the friends list */
        .css-1gbighu::-webkit-scrollbar-track {
            background-color: #4A4C56;
        }

        /* The server title and the dropdown for server management if you are a server owner */
        .css-164bh9z {
            background-color: #525560;
        }

        .css-13yl7ql {
            background-color: #20C507;
            color: #ffffff;
        }

        .css-13bgte7 {
            background-color: #262638;
        }

        .chakra-button css-4g16hc {
            background-color: #FF0000;
        }

        .css-11pna72:focus-visible, .css-11pna72[data-focus-visible] {
            box-shadow: none;
        }
    `;
    document.head.appendChild(style);
})();