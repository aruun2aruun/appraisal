import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import {AppraisalSpinnerService} from '../components/appraisal-spinner/appraisal-spinner.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    baseURL = environment.baseUrl;

    private HTTP_GET = 'GET';
    private HTTP_DELETE = 'DELETE';
    private HTTP_PUT = 'PUT';
    private HTTP_POST = 'POST';

    constructor(
        private appraisalSpinnerService: AppraisalSpinnerService,
        private http: HttpClient,
    ) {}

    generateKey() {
        return uuidv4();
    }

    get(
        endpoint: string,
        isBackgroundProcess: boolean = false,
        headers?: any): Observable<any> {
        return this.getOrDelete(
            this.HTTP_GET,
            endpoint,
            headers,
            isBackgroundProcess
        );
    }

    delete(
        endpoint: string,
        headers?: any,
        isBackgroundProcess: boolean = false
    ): Observable<any> {
        return this.getOrDelete(
            this.HTTP_DELETE,
            endpoint,
            headers,
            isBackgroundProcess
        );
    }

    put(
        endpoint: string,
        payload: object,
        headers?: any,
        isBackgroundProcess: boolean = false
    ): Observable<any> {
        return this.putOrPost(
            this.HTTP_PUT,
            endpoint,
            payload,
            headers,
            isBackgroundProcess
        );
    }

    post(
        endpoint: string,
        payload: object,
        headers?: any,
        isBackgroundProcess: boolean = false
    ): Observable<any> {
        return this.putOrPost(
            this.HTTP_POST,
            endpoint,
            payload,
            headers,
            isBackgroundProcess
        );
    }

    private getOrDelete(
        httpMethod,
        endpoint: string,
        headers?: any,
        isBackgroundProcess: boolean = false
    ): Observable<any> {
        // generate a unique id and store it in a constant
        const uid = uuidv4();
        if (!isBackgroundProcess) {
            // start spinner (pass unique id)
            this.appraisalSpinnerService.spinnerEvent$.next({ uid, status: true });
        }

        return new Observable((observer) => {
                // pass unique id
                this.handleResponse(
                    httpMethod === this.HTTP_GET
                        ? this.http.get(this.constructUrl(endpoint), headers)
                        : this.http.delete(
                              this.constructUrl(endpoint),
                              headers
                          ),
                    observer,
                    isBackgroundProcess,
                    uid
                );
        });
    }

    private putOrPost(
        httpMethod,
        endpoint: string,
        payload: object,
        headers?: any,
        isBackgroundProcess: boolean = false
    ): Observable<any> {
        // generate a unique id and store it in a constant
        const uid = uuidv4();
        if (!isBackgroundProcess) {
            // start spinner (pass unique id)
            this.appraisalSpinnerService.spinnerEvent$.next({ uid, status: true });
        }

        return new Observable((observer) => {
                // pass unique id
                this.handleResponse(
                    httpMethod === this.HTTP_PUT
                        ? this.http.put(
                              this.constructUrl(endpoint),
                              payload,
                              headers
                          )
                        : this.http.post(
                              this.constructUrl(endpoint),
                              payload,
                              headers
                          ),
                    observer,
                    isBackgroundProcess,
                    uid
                );
        });
    }

    constructUrl = (endpoint: string) =>
             `${this.baseURL}${endpoint}`

    // add unique id as an argument
    handleResponse = (httpCall, observer, isBackgroundProcess, uId) => {
        httpCall.subscribe(
            (response) => {
                if (!isBackgroundProcess) {
                    // stop spinner
                    this.appraisalSpinnerService.spinnerEvent$.next({
                        uid: uId,
                        status: false,
                    });
                }
                observer.next(response);
            },
            (error) => {
                if (!isBackgroundProcess) {
                    // stop spinner
                    this.appraisalSpinnerService.spinnerEvent$.next({
                        uid: uId,
                        status: false,
                    });
                }
                observer.error(error);
            },
            () => {
                observer.complete();
            }
        );
    };
}
