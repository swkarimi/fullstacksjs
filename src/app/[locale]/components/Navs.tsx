import { features } from '../../../features';
import { useTranslations, useLocale } from 'next-intl';
import Nav from './Nav';

interface Nav {
  feature: keyof typeof features;
  href: string;
  children: string;
}

const navs: Nav[] = [
  { feature: 'about', href: '/', children: 'about' },
  { feature: 'rules', href: '/rules', children: 'rules' },
  { feature: 'ask', href: '/ask', children: 'ask' },
  { feature: 'events', href: '/events', children: 'events' },
];

export default function Navs() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <ul className="inline-flex gap-8 text-md font-bold leading-tight tablet:gap-16">
      {navs
        .filter((c) => features[c.feature])
        .map(({ children, href }) => (
          <Nav
            key={href}
            href={href}
            direction={locale === 'fa' ? 'rtl' : 'ltr'}
          >
            {t(children)}
          </Nav>
        ))}
    </ul>
  );
}