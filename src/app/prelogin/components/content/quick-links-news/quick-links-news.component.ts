import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '../../../../pipes/translate.pipe';

interface QuickLink {
  key: string;
  url: string;
  external: boolean;
}

interface NewsArticle {
  titleKey: string;
  url: string;
  date: string;
  readTime: string;
  external: boolean;
}

@Component({
  selector: 'app-quick-links-news',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './quick-links-news.component.html',
  styleUrl: './quick-links-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuickLinksNewsComponent {
  quickLinks: QuickLink[] = [
    {
      key: 'quickLinks.links.getHelp',
      url: 'https://www.thomsonreuters.com/en-us/help',
      external: true,
    },
    {
      key: 'quickLinks.links.contactOnesource',
      url: 'https://tax.thomsonreuters.com/en/onesource/contact',
      external: true,
    },
    {
      key: 'quickLinks.links.signInCase',
      url: 'https://signon.thomsonreuters.com/v2?productid=MKTTAX',
      external: true,
    },
    {
      key: 'quickLinks.links.checkStatus',
      url: 'https://corporates-status.thomsonreuters.com/',
      external: true,
    },
  ];

  newsArticles: NewsArticle[] = [
    {
      titleKey: 'news.articles.payrollCompliance',
      url: 'https://tax.thomsonreuters.com/news/payrollorg-compliance-chief-reacts-to-irs-draft-2026-forms-under-obbba/',
      date: 'September 12, 2025',
      readTime: '5 minute',
      external: true,
    },
    {
      titleKey: 'news.articles.key2026Figures',
      url: 'https://tax.thomsonreuters.com/news/key-2026-figures-calculated-by-thomson-reuters-checkpoint-based-on-inflation-data-now-available/',
      date: 'September 11, 2025',
      readTime: '6 minute',
      external: true,
    },
    {
      titleKey: 'news.articles.senatorsGrill',
      url: 'https://tax.thomsonreuters.com/news/senators-grill-irs-chief-counsel-nominee/',
      date: 'September 11, 2025',
      readTime: '5 minute',
      external: true,
    },
  ];
}
