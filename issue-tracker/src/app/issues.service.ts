import { Injectable } from '@angular/core';
import { Issues } from './issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  // issue property to hold our issue data 

  private issues: Issues[] = [];
  constructor() { }

  // return all issues that have not been completed
  getPendingIssues(): Issues[] {
    return this.issues.filter(issue => !issue.completed)
  }
}
