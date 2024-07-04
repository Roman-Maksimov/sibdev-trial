'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AddArticleCommentRequest, Article } from '@/src/api/articles/types';
import { queryClient } from '@/src/api/client';

export interface CommentsAddFormProviderProps {
  articleId: Article['id'];
}

export const CommentsAddFormProvider: FC<
  PropsWithChildren<CommentsAddFormProviderProps>
> = ({ articleId, children }) => {
  const form = useForm<AddArticleCommentRequest>({
    defaultValues: {
      articleId,
      message: '',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...form}>{children}</FormProvider>
    </QueryClientProvider>
  );
};
