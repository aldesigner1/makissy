import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

import "./Maps.css";

const Maps = () => (
    <Plan />
)

export class Plan extends Component {
    render() {
        return (
            <div class="carte">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.444342583682!2d11.479809528278256!3d3.8399832553066995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcfba91be3b%3A0x3eb618bb8fc3a303!2sBiyem-Assi%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1573252016479!5m2!1sfr!2scm" width="100%" height="100%" frameborder="0" style={{ "border": "0" }} allowfullscreen="" title="Makissy"></iframe>
            </div>
        )
    }
}



const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Maps);