import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

interface item {
    href: string,
    title: string,
    description: string,
}

@Component({
    selector: "CustomLink",
    standalone: true,
    imports: [CommonModule, MatIconModule, HttpClientModule],
    templateUrl: "link.html",
    styleUrls: ["link.scss"],
})

/*
*   <Button [list=boolean|link=href]>
*       Title of the button
*       <a item href=""> // Stackable - Only wanted if list=true
*           <p title>
*               Item title
*           </p>
*           <p description>
*              Item description
*           </p>
*       </a>
*   </Button>
*/
export default class Button {
    @Input() href!: string;
    @Input() list: boolean = false;
    @Input() items: item[] = []; 
    @Input() title: string = "";
}