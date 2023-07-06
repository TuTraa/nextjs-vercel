import * as React from 'react';
import useSWR from "swr"

export interface StudentDetailProps {
    studentId: any
}

export default function StudentDetail({ studentId }: StudentDetailProps) {

    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`)

    return (
        <div>
            name:{data?.name || "---"}
        </div>
    );
}
