"use client"
import { addPost, State } from "@/actions/posts"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react"

export default function PostsForm() {
    const initialState: State = {
        message: null
    }
    const [state, dispatch] = useActionState(addPost, initialState)
    
    return (
        <form action={dispatch}>
            {state.message && (
                <p>{state.message}</p>
            )}

            <Input
                name="text"
                type="string"
                placeholder="Add some text here."
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}