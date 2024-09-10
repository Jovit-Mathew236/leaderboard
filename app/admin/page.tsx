import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { importCSVAction } from "./actions"

export default function Admin(){
    return (
        <div className="flex flex-col gap-3 p-5">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="w-fit">Import CSV</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                    <AlertDialogTitle>Import from CSV table</AlertDialogTitle>
                    <form action={importCSVAction} className="flex flex-col gap-3">
                        <Label>Upload File</Label>
                        <Input type="file" name="file"/>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button type='submit'>Import</Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}