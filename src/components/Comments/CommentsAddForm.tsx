'use client';

import { Button, CircularProgress, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { FC, useCallback } from 'react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';

import { useAddArticleCommentMutation } from '@/src/api/articles/queries';
import { AddArticleCommentRequest } from '@/src/api/articles/types';

export const CommentsAddForm: FC = () => {
  // Here will be using react-query mutation instead of common Form.action
  // const { pending } = useFormStatus();
  const router = useRouter();

  const addArticleCommentMutation = useAddArticleCommentMutation();

  const form = useFormContext();

  const submit = useCallback<SubmitHandler<AddArticleCommentRequest>>(
    async (data) => {
      if (addArticleCommentMutation.isPending) {
        return;
      }

      await addArticleCommentMutation.mutateAsync(data);
      // TODO: normally, if we would use real API via fetch, we could do just a common revalidation
      // revalidatePath(`/articles/${data.articleId}`, 'page');
      // or
      // revalidateTag('comments');
      router.refresh();
    },
    []
  );

  return (
    <Stack
      component="form"
      alignItems="flex-end"
      gap={2}
      mt={2}
      onSubmit={form.handleSubmit(submit)}
    >
      <Controller
        control={form.control}
        name="message"
        rules={{
          required: 'Field is required',
          minLength: {
            value: 3,
            message: 'The message should be at least 3 characters length',
          },
        }}
        render={({ field, formState }) => {
          return (
            <TextField
              {...field}
              error={!!formState.errors.message}
              helperText={formState.errors.message?.message}
              multiline
              minRows={5}
              fullWidth
            />
          );
        }}
      />

      <Button
        variant="contained"
        type="submit"
        disabled={addArticleCommentMutation.isPending}
        endIcon={
          addArticleCommentMutation.isPending ? (
            <CircularProgress size={12} color="inherit" />
          ) : undefined
        }
      >
        Add comment
      </Button>
    </Stack>
  );
};
