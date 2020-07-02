import { SectionSocialMediaAdvertisingComponent } from './section-social-media-advertising/section-social-media-advertising.component';
import { SectionCampaignsResultsComponent } from './section-campaigns-results/section-campaigns-results.component';
import { SharedModule } from './../../gaxon/modules/shared/shared.module';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { WidgetOverviewComponent } from './widget-overview/widget-overview.component';
import { WidgetRecentTicketsComponent } from './widget-recent-tickets/widget-recent-tickets.component';
import { SectionTicketsComponent } from './section-tickets/section-tickets.component';
import { SectionLeadsComponent } from './section-leads/section-leads.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';


@NgModule({
  declarations: [
    HomepageComponent,
    WidgetOverviewComponent,
    WidgetRecentTicketsComponent,
    SectionTicketsComponent,
    SectionCampaignsResultsComponent,
    SectionLeadsComponent,
    SectionSocialMediaAdvertisingComponent,
    SectionProjectsComponent,
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
