import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'cb-header',
    template: `
    <div class="cb-nav-wrapper">
  <nav class="navbar navbar-expand-sm cb-navbar">
    <div class="container">
      <a class="navbar-brand cb-logo" href="#">ChatterBox</a>
    </div>
  </nav>
</div>
    `,
})

export class HeaderComponent implements OnInit {
    ngOnInit() {
        
    }
}
