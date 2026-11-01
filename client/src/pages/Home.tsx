import { usePageMeta } from "@/components/SiteLayout";
import DistributionLanding from "@/components/distribution/DistributionLanding";

export default function Home() {
  usePageMeta(
    "MONTYX RECORDS Distribution | Free artist portal from Nepal",
    "Start free through the MONTYX artist portal, with no release-count cap in the current offer. Delivered through a white-label partner; destination, territory and YouTube eligibility vary."
  );

  return <DistributionLanding />;
}
