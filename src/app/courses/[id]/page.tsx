"use client";

import StudentTable from "@/components/StudentTable";
import { Button } from "@/components/ui/button";
import useStudents from "@/hooks/useStudents";
import { Student } from "@/types/schemas/student-schema";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CourseEnrollment = () => {
  const params = useParams();
  const { getStudentsEnrolledByCourseId } = useStudents();
  const [studentsEnrolled, setStudentsEnrolled] = useState<Student[]>([]);

  useEffect(() => {
    getStudentsEnrolledByCourseId(params.id as string).then((res) => {
      setStudentsEnrolled(res)
    }
    );
  }, [params.id]);

  return (  
    <>
      <StudentTable data={studentsEnrolled}/>
    </>
  );
};

export default CourseEnrollment;
