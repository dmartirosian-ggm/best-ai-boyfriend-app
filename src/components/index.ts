// Components available inside every .mdx article without importing them.
import AppCard from './AppCard.astro';
import CompareTable from './CompareTable.astro';
import ReviewSummary from './ReviewSummary.astro';
import VsTable from './VsTable.astro';
import CTA from './CTA.astro';
import Callout from './Callout.astro';
import ProsCons from './ProsCons.astro';
import TopPicksStrip from './TopPicksStrip.astro';
import PlanTable from './PlanTable.astro';

export const mdxComponents = {
  AppCard,
  CompareTable,
  ReviewSummary,
  VsTable,
  CTA,
  Callout,
  ProsCons,
  TopPicksStrip,
  PlanTable,
};
