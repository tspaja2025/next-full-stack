"use client";

import { deletePost, State } from "@/actions/posts";
import { Button } from '@/components/ui/button';
import { TrashIcon } from "lucide-react";
import { useActionState } from "react";

interface DeletePostsProps {
    postId: number
}

export default function DeletePost({postId}: DeletePostsProps) {
    const initialState: State = {
        message: null
    }
    const deletePostWithId = deletePost.bind(null, initialState, postId);
    const [state, dispatch] = useActionState(deletePostWithId, initialState);

    return (
        <form action={dispatch}>
             <input type="hidden" name="postId" value={postId} />

            <Button type="submit" variant="destructive"><TrashIcon/></Button>
        </form>
    )
}