import Link from "next/link";
import Image from "next/image";
import {PlatformsGroup} from "./styles";
import InternalLinkButton from "../InternalLinkButton";

export default function LandingHeroCTA() {
  return (
    <div>
      <InternalLinkButton href="/start?sc_icampaign=start&sc_ichannel=docs-home">
        <span>Get started for free</span>
      </InternalLinkButton>
      <PlatformsGroup>
        <Link href="/start/q/integration/react?sc_icampaign=react-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/react.svg" />
          </a>
        </Link>
        <Link href="/start/q/integration/vue?sc_icampaign=vue-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/vue.svg" />
          </a>
        </Link>
        <Link href="/start/q/integration/js?sc_icampaign=js-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/js.svg" />
          </a>
        </Link>
        <Link href="/start/q/integration/ios?sc_icampaign=ios-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/ios.svg" />
          </a>
        </Link>
        <Link href="/start/q/integration/android?sc_icampaign=android-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/android.svg" />
          </a>
        </Link>
        <Link href="/start/q/integration/flutter?sc_icampaign=flutter-start&sc_ichannel=docs-home">
          <a>
            <Image height={40} width={40} src="/integrations/flutter.svg" />
          </a>
        </Link>
      </PlatformsGroup>
    </div>
  );
}