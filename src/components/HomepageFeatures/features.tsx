import React from "react";

import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';

export const features = [
    {
        title: translate({ id: 'homepage.feature.easy.title', message: 'Easy to Use' }),
        imageUrl: 'img/undraw_mt_easy.svg',
        description: translate(
            {
                id: 'homepage.feature.easy.description',
                message: 'With tooltips, {documentation}, and a {community}, getting started with Mapping Tools is just a click away!',
            },
            {
                documentation: <Link to="/docs">{translate({ id: 'homepage.documentationLink', message: 'documentation' })}</Link>,
                community: <a href="https://discord.gg/YfjKN2yjQV">{translate({ id: 'homepage.communityLink', message: 'community Discord server' })}</a>,
            },
        ),
    },
    {
        title: translate({ id: 'homepage.feature.creativity.title', message: 'Unleash Your Creativity' }),
        imageUrl: 'img/undraw_mt_creativity.svg',
        description: translate({ id: 'homepage.feature.creativity.description', message: 'Shape and manipulate sliders with a simple and intuitive user interface.' }),
    },
    {
        title: translate({ id: 'homepage.feature.hitsounding.title', message: 'Diversify Your Hitsounding' }),
        imageUrl: 'img/undraw_mt_hitsounding.svg',
        description: translate({ id: 'homepage.feature.hitsounding.description', message: 'Create and modify unique and complex hitsounding with ease.' }),
    },
    {
        title: translate({ id: 'homepage.feature.cleaning.title', message: 'Clean and Polish Your Maps' }),
        imageUrl: 'img/undraw_mt_cleaning.svg',
        description: translate({ id: 'homepage.feature.cleaning.description', message: 'Resnap all relevant timing points and remove unnecessary ones with the click of a button.' }),
    },
    {
        title: translate({ id: 'homepage.feature.color.title', message: 'Bring Color to Your Maps' }),
        imageUrl: 'img/undraw_mt_colorhax.svg',
        description: translate({ id: 'homepage.feature.color.description', message: "Colorhax without hassle, the way it always should've been." }),
    },
    {
        title: translate({ id: 'homepage.feature.geometry.title', message: 'Reinforce Geometric Structure' }),
        imageUrl: 'img/undraw_mt_geometrydashboard.svg',
        description: translate({ id: 'homepage.feature.geometry.description', message: 'Effortlessly create perfect blankets, off-angle symmetry, hex grids, and more.' }),
    }
];
