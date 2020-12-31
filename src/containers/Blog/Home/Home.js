import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import '@fortawesome/fontawesome-free/css/all.css'


const nodes = [
    {
        value: '/app',
        label: '6.0 Planificación',
        children: [
            {
                value: '/app/Http',
                label: '6.1 Acciones para abordar riesgos y oportunidades',
                children: [
                    {
                        value: '/app/Http/Controllers',
                        label: '6.1.1 Generalidades',
                        children: [{
                            value: '/app/Http/Controllers/WelcomeController.js',
                            label: '6.1.1.1 Evaluación de los riesgos para la SST y otros riesgos para el sistema de gestión de la SST',
                        }],
                    },
                    {
                        value: '/app/Http/routes.js',
                        label: '6.1.2 Determinación de los requisitos legales y otros requisitos',
                    },
                ],
            },
            {
                value: '/app/Providers',
                label: '6.1.2 Generalidades',
                children: [{
                    value: '/app/Providers/EventServiceProvider.js',
                    label: '6.1.2.1 Evaluación',
                }],
            },
        ],
    },
    {
        value: '/config',
        label: '7 Clausula 7',
        children: [
            {
                value: '/config/app.js',
                label: '7.1 Clausula',
            },
            {
                value: '/config/database.js',
                label: '7.2 Clausula',
            },
        ],
    },
    {
        value: '/public',
        label: '8.0 Clausula',
        children: [
            {
                value: '/public/assets/',
                label: '8.1',
                children: [{
                    value: '/public/assets/style.css',
                    label: '8.1.1 style.css',
                }],
            },
            {
                value: '/public/index.html',
                label: '8.2',
            },
        ],
    },
    {
        value: '/.env',
        label: '9.0',
    },
];

class Home extends React.Component {
    state = {
        checked: [
            '/app/Http/Controllers/WelcomeController.js',
            '/app/Http/routes.js',
            '/public/assets/style.css',
            '/public/index.html',
            '/.env',
        ],
        expanded: [
            '/app',
            '/config',
            '/public',
        ],
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded } = this.state;

        return (
        <h2>
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nodes={nodes}
                optimisticToggle={false}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
            />
        </h2>
        );
    }
}

export default Home;