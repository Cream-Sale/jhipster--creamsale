import {Route} from '@angular/router';

import {JhiMetricsMonitoringComponent} from './metrics.component';

export const metricsRoute: Route = {
  path: '',
  component: JhiMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
