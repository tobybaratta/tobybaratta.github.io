import DefaultTheme from 'vitepress/theme';
import SiteLayout from './SiteLayout.vue';
import './style.scss';

export default {
  ...DefaultTheme,
  Layout: SiteLayout,
};
