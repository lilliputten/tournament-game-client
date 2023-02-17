/** @module ResultsPage
 *  @since 2023.02.17, 05:04
 *  @changed 2023.02.17, 05:04
 */

import GenericPageLayout from '@/layout/GenericPageLayout';
import { PageSectionWrapper } from '@/ui-elements';
import { subPageTitle } from '@/ui-support/pageUtils';
import { ResultsBlock } from '@/ui-blocks/ResultsBlock';

export default function IndexPage(): JSX.Element {
  const pageTitle = 'Результаты';
  const title = subPageTitle(pageTitle);
  return (
    <GenericPageLayout title={title}>
      <PageSectionWrapper flex flexVertical fullSizeFlexChild flexCenter>
        <ResultsBlock />
      </PageSectionWrapper>
    </GenericPageLayout>
  );
}