import UpdateForm from '@/components/update-form';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    }
}

export default async function UpdatePostPage({
    params
}: PageProps) {
    const postId = Number(params.id);

    if (!postId) {
        redirect("/")
    }

    const post = await prisma.post.findUnique({
        where: { id: postId}
    });

    if (!post) {
        redirect("/")
    }

    return (
        <UpdateForm post={post}/>
    );
}