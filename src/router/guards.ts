import type { Router } from 'vue-router';

export function setupRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    // Set page title
    document.title = `${to.meta.title} | Your App Name`;
    next();
  });

  router.afterEach(() => {
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  });
}
