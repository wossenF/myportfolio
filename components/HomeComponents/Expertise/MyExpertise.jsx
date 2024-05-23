import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ExpertiseCard from "./ExpertiseCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {
    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('/api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching expertise:', error))
    );

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
                            <ParagraphSkeleton key={key} className="space-y-2 p-8" />
                        ))
                        :
                        data?.map((item, key) => (
                            <ExpertiseCard key={key} data={item} />
                        ))
                }
            </div>
        </>
    );
}

export default MyExpertise;
