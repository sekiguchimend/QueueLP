
import React from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeUploadProps {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
}

const ResumeUpload = ({ resumeFile, setResumeFile }: ResumeUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">履歴書・職務経歴書</h2>
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-2">
              ファイルをドラッグ&ドロップするか、クリックしてアップロード
            </p>
            <input
              type="file"
              className="hidden"
              id="resume-upload"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("resume-upload")?.click()}
              className="mt-2"
            >
              ファイルを選択
            </Button>
          </div>
          {resumeFile && (
            <div className="mt-4 text-left">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="flex items-center">
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">{resumeFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setResumeFile(null)}
                >
                  削除
                </Button>
              </div>
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500">
          PDFまたはWord文書(.doc, .docx)形式のファイルをアップロードしてください。最大ファイルサイズ: 5MB
        </p>
      </div>
    </div>
  );
};

export default ResumeUpload;
