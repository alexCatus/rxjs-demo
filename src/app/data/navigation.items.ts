import { OperatorsPageComponent } from '../page/operators-page/operators-page.component';
import { PromiseVsObservablePageComponent } from '../page/promise-vs-observable-page/promise-vs-observable-page.component';

enum Path {
  OPERATORS = 'operators',
  PROMISE_VS_OBSERVABLE = 'promises',
  SUBSCRIBE = 'subscription',
  CHANGE_DETECTION_STRATEGY = 'changeDetectionStrategy',
  MEMORY_LEAK = 'memoryLeak',
}
const promises = {
  path: Path.PROMISE_VS_OBSERVABLE,
  component: PromiseVsObservablePageComponent,
};
const operators = { path: Path.OPERATORS, component: OperatorsPageComponent };

export const currentRoutes = [promises, operators];
