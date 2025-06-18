import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })

export default class RegisterIcon {
    constructor(
        iconRegistry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon(
            'arrow-right',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/arrow-right.svg')
        )
    }
}