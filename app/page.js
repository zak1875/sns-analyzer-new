"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

const storyOptions = [
  "タグ多め・反応多い",
  "風景や詩の投稿",
  "日常を細かく上げる",
  "ポエムや黒背景投稿",
  "発信・セミナー・報告型",
];

export default function SNSAnalyzer() {
  const [bio, setBio] = useState("");
  const [posts, setPosts] = useState("");
  const [story, setStory] = useState(storyOptions[0]);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <Input placeholder="プロフィール文を入力" value={bio} onChange={(e) => setBio(e.target.value)} />
          <Textarea placeholder="投稿キーワード（カンマ区切り）" value={posts} onChange={(e) => setPosts(e.target.value)} />
          <Select value={story} onValueChange={setStory}>
            {storyOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </Select>
          <Button>診断する</Button>
        </CardContent>
      </Card>
    </div>
  );
}
