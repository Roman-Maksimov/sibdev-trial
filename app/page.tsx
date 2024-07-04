import { Container } from '@mui/material';

import { Articles } from '@/src/components/Articles/Articles';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Articles />
    </Container>
  );
}
