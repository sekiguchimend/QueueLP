
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ArticleFormSkeleton = () => {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header skeleton */}
        <div className="flex items-center gap-4 mb-8">
          <Skeleton className="h-10 w-20" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-80" />
          </div>
        </div>
        
        {/* Form skeleton */}
        <div className="space-y-6">
          {/* Basic info card skeleton */}
          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-indigo-500/30 to-purple-600/30">
              <Skeleton className="h-7 w-32 bg-white/20" />
              <Skeleton className="h-4 w-64 mt-1 bg-white/20" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <div className="flex gap-4">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Category and publishing skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-none shadow-md">
              <CardHeader className="bg-gradient-to-r from-emerald-500/30 to-teal-600/30">
                <Skeleton className="h-7 w-32 bg-white/20" />
                <Skeleton className="h-4 w-48 mt-1 bg-white/20" />
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-500/30 to-cyan-600/30">
                <Skeleton className="h-7 w-32 bg-white/20" />
                <Skeleton className="h-4 w-48 mt-1 bg-white/20" />
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-4 w-56 mt-1" />
                  </div>
                  <Skeleton className="h-6 w-12 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content skeleton */}
          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="bg-gradient-to-r from-amber-500/30 to-orange-600/30">
              <Skeleton className="h-7 w-32 bg-white/20" />
              <Skeleton className="h-4 w-64 mt-1 bg-white/20" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-80" />
                  <Skeleton className="h-24 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-4 w-96" />
                  <Skeleton className="h-64 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Actions skeleton */}
          <div className="flex justify-end gap-4 p-4 bg-white rounded-lg shadow">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFormSkeleton;
