import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Lock,
	ChartNoAxesGantt,
	Bookmark,
	Braces,
	RotateCcw,
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { CODE_TEMPLATES } from "@/constants";

export default function CodeBody() {
	const [language, setLanguage] = useState("python");
	const [code, setCode] = useState(CODE_TEMPLATES.python);

	const handleLanguageChange = (newLanguage) => {
		setLanguage(newLanguage);
		setCode(CODE_TEMPLATES[newLanguage]);
	};

	return (
		<>
			<div className="flex justify-between h-8 p-1">
				<div className="flex gap-1">
					<LanguageSelector onSelect={handleLanguageChange} />
					<Button variant="ghost" className="h-6 px-2">
						<Lock className="!w-3.5" /> Auto
					</Button>
				</div>
				<div className="flex gap-1">
					<Button variant="ghost" className="h-6 p-1">
						<ChartNoAxesGantt />
					</Button>
					<Button variant="ghost" className="h-6 p-1">
						<Bookmark />
					</Button>
					<Button variant="ghost" className="h-6 p-1">
						<Braces />
					</Button>
					<Button variant="ghost" className="h-6 p-1">
						<RotateCcw />
					</Button>
				</div>
			</div>
			<Separator />
			<Editor
				height="100%"
				language={language}
				theme="vs-dark"
				value={code}
				options={{
					minimap: { enabled: false },
					quickSuggestions: false,
					scrollBeyondLastLine: false,
				}}
			/>
		</>
	);
}
