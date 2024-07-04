import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

export const ArticlePageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      {/* TODO: Replace by normal Breadcrumbs */}
      <Box mb={2}>
        <Link href="/">
          <Button variant="text" startIcon={<ArrowBack />}>
            Home
          </Button>
        </Link>
      </Box>

      {children}
    </Container>
  );
};

export default ArticlePageLayout;
