"use client";

import { State, updatePost } from "@/actions/posts";
import { Post } from "@/generated/prisma";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

interface UpdateFormProps {
    post: Post
}

export default function UpdateForm({ post }: UpdateFormProps) {
    const initialState: State = { message: null };
    const [state, dispatch] = useActionState(updatePost, initialState);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={dispatch} className="flex flex-col gap-4">
                {state.message && <div>{state.message}</div>}
                <input type="hidden" name="postId" value={post.id} />
                <div className="flex gap-2">
                    <Input
                        name="text"
                        type="string"
                        placeholder="Add some text here."
                        defaultValue={post.text}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </main>
    );
}