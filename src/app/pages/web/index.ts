import { Component } from "@angular/core";

import Header from '@components/header';
import Navigation from '@components/navigation';
import Background from '@components/background';
import Section from '@components/section';

@Component({
    selector: "web",
    standalone: true,
    templateUrl: "./web.html",
    imports: [Navigation, Background, Header, Section],
})

export default class Home {

};