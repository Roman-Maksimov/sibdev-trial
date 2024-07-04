import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { addArticleComment } from '@/src/api/articles/actions';
import {
  AddArticleCommentRequest,
  AddArticleCommentResponse,
} from '@/src/api/articles/types';

export const useAddArticleCommentMutation = (
  options?: UseMutationOptions<
    AddArticleCommentResponse,
    unknown,
    AddArticleCommentRequest
  >
) => {
  return useMutation({
    mutationFn: addArticleComment,
    ...options,
  });
};
