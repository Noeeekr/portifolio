import { Component } from "@angular/core";

import Background from "@components/background";
import Navigation from '@components/navigation';
import Header from '@components/header';
import Section from '@components/section';

@Component({
    selector: "home",
    standalone: true,
    imports: [Background, Navigation, Header, Section],
    templateUrl: "home.html",
})

export default class Home {

}