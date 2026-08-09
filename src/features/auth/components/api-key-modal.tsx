'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/core/components/dialog/dialog';
import { Input } from '@/core/components/input/input';
import { Button } from '@/core/components/button/button';
import { Link } from '@/core/components/link/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/core/components/accordion/accordion';
import { ArrowUpRight } from 'lucide-react';

interface ApiKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  placeholderText?: string;
  linkText?: string;
  faqsTitle?: string;
  saveText?: string;
  cancelText?: string;
}

import faqsData from '@/features/auth/data/faqs.json';

interface FaqItem {
  question: string;
  answer: string;
}

export function ApiKeyModal({
  open,
  onOpenChange,
  title = 'Enter Your OpenAI API Key:',
  description = 'You need an OpenAI API Key to use this app. Your API Key will be stored locally on your browser.',
  placeholderText = 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  linkText = 'Go to Open AI to get your API key',
  faqsTitle = 'FAQs',
  saveText = 'Save',
  cancelText = 'Cancel',
}: ApiKeyModalProps) {
  const [apiKey, setApiKey] = React.useState('');

  const faqs: FaqItem[] = faqsData as FaqItem[];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-32px)] max-w-[480px] overflow-hidden rounded-[12px] border-neutral-200 p-0 sm:w-full">
        <div className="flex max-h-[85vh] flex-col">
          {/* Top Section (Fixed) */}
          <div className="flex shrink-0 flex-col gap-6 p-6 pb-2">
            <DialogHeader className="gap-1 text-center sm:text-center">
              <DialogTitle className="text-[20px] leading-[28px] font-semibold text-neutral-900">
                {title}
              </DialogTitle>
              <DialogDescription className="text-[14px] leading-[20px] font-normal text-neutral-500">
                {description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2">
              <Input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={placeholderText}
              />
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 self-start text-[14px] leading-[20px] font-medium text-indigo-600 hover:underline"
              >
                <ArrowUpRight className="h-4 w-4" />
                {linkText}
              </a>
            </div>

            <DialogFooter className="flex-row justify-center gap-3 sm:justify-center">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => onOpenChange(false)}
              >
                {cancelText}
              </Button>
              <Button className="flex-1" onClick={() => onOpenChange(false)}>
                {saveText}
              </Button>
            </DialogFooter>
          </div>

          <div className="shrink-0 px-6 pt-2">
            <h3 className="text-[18px] leading-[28px] font-semibold text-neutral-900">
              {faqsTitle}
            </h3>
          </div>

          {/* Bottom Section (Scrollable FAQs) */}
          <div className="flex flex-col overflow-y-auto px-6 pt-4 pb-6">
            <Accordion type="multiple" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-[14px] leading-[20px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-[20px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
